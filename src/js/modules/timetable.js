// https://codyhouse.co/gem/schedule-template/

jQuery(document).ready(function($){
  var transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
  var transitionsSupported = ( $('.csstransitions').length > 0 );
  //if browser does not support transitions - use a different event to trigger them
  if( !transitionsSupported ) transitionEnd = 'noTransition';

  //should add a loading while the events are organized

  function SchedulePlan( element ) {
    this.element = element;
    this.timeline = this.element.find('.timeline');
    this.timelineItems = this.timeline.find('li');
    this.timelineItemsNumber = this.timelineItems.length;
    this.timelineStart = getScheduleTimestamp(this.timelineItems.eq(0).text());
    //need to store delta (in our case half hour) timestamp
    this.timelineUnitDuration = getScheduleTimestamp(this.timelineItems.eq(1).text()) - getScheduleTimestamp(this.timelineItems.eq(0).text());

    this.eventsWrapper = this.element.find('.events');
    this.eventsGroup = this.eventsWrapper.find('.events-group');
    this.singleEvents = this.eventsGroup.find('.single-event');
    this.eventSlotHeight = this.eventsGroup.eq(0).children('.top-info').outerHeight();
    this.animating = false;
    this.initSchedule();
  }

  SchedulePlan.prototype.initSchedule = function() {
    this.scheduleReset();
    this.initEvents();
  };

  // Safari FIX
  $(window).on('load', function(){
    objSchedulesPlan.forEach(function(element){
      element.scheduleReset();
    });
  });

  $('.c-tab__link').on('click', function(){
    setTimeout(scheduleClick, 10);

    function scheduleClick() {
      objSchedulesPlan.forEach(function(element){
        element.scheduleReset();
      });
    }
  });
  // End Safari FIX

  SchedulePlan.prototype.scheduleReset = function() {
    var mq = this.mq();

    if( mq == 'desktop' && !this.element.hasClass('js-full') ) {
      //in this case you are on a desktop version (first load or resize from mobile)
      this.eventSlotHeight = this.eventsGroup.eq(0).children('.top-info').outerHeight();
      this.element.addClass('js-full');
      this.placeEvents();
    } else if(  mq == 'mobile' && this.element.hasClass('js-full') ) {
      //in this case you are on a mobile version (first load or resize from desktop)
      this.element.removeClass('js-full loading');
      this.eventsGroup.children('ul').add(this.singleEvents).removeAttr('style');
      this.eventsWrapper.children('.grid-line').remove();
    } else {
      this.element.removeClass('loading');
    }
  };

  SchedulePlan.prototype.initEvents = function() {
    var self = this;

    this.singleEvents.each(function(){
      //create the .event-date element for each event
      var durationLabel = '<span class="event-date">'+$(this).data('start')+' - '+$(this).data('end')+'</span>';
      $(this).children('a').prepend($(durationLabel));
    });
  };

  SchedulePlan.prototype.placeEvents = function() {
    var self = this;
    this.singleEvents.each(function(){
      //place each event in the grid -> need to set top position and height
      // var start = getScheduleTimestamp($(this).attr('data-start'));

      // Check if the start time of an event is past midnight
      if ((getScheduleTimestamp($(this).attr('data-start')) <=  getScheduleTimestamp('24:00')) && (getScheduleTimestamp($(this).attr('data-start')) >  getScheduleTimestamp('03:00'))) {
        var start = getScheduleTimestamp($(this).attr('data-start'));
      } else {
        var start = getScheduleTimestamp($(this).attr('data-start')) + getScheduleTimestamp('24:00');
      }

      // Check if the end time of an event is past midnight
      if ((getScheduleTimestamp($(this).attr('data-end')) <=  getScheduleTimestamp('24:00')) && (getScheduleTimestamp($(this).attr('data-end')) >  getScheduleTimestamp('03:00'))) {
        var duration = getScheduleTimestamp($(this).attr('data-end')) - start;
      } else {
        var duration = getScheduleTimestamp($(this).attr('data-end')) + getScheduleTimestamp('24:00') - start;
      }

      var eventTop = self.eventSlotHeight*(start - self.timelineStart)/self.timelineUnitDuration,
      eventHeight = self.eventSlotHeight*duration/self.timelineUnitDuration;

      $(this).css({
        top: (eventTop -1) +'px',
        height: (eventHeight+1)+'px'
      });
    });

    this.element.removeClass('loading');
  };

  SchedulePlan.prototype.mq = function(){
    //get MQ value ('desktop' or 'mobile')
    var self = this;

    return window.getComputedStyle(this.element.get(0), '::before').getPropertyValue('content').replace(/["']/g, '');
  };

  var schedules = $('.cd-schedule');
  var objSchedulesPlan = [],
  windowResize = false;

  if( schedules.length > 0 ) {
    schedules.each(function(){
      //create SchedulePlan objects
      objSchedulesPlan.push(new SchedulePlan($(this)));
    });
  }

  $(window).on('resize', function(){
    if( !windowResize ) {
      windowResize = true;
      (!window.requestAnimationFrame) ? setTimeout(checkResize) : window.requestAnimationFrame(checkResize);
    }
  });

  function checkResize(){
    objSchedulesPlan.forEach(function(element){
      element.scheduleReset();
    });
    windowResize = false;
  }

  function getScheduleTimestamp(time) {
    //accepts hh:mm format - convert hh:mm to timestamp
    time = time.replace(/ /g,'');
    var timeArray = time.split(':');
    var timeStamp = parseInt(timeArray[0])*60 + parseInt(timeArray[1]);
    return timeStamp;
  }
});

// Sort events
jQuery.fn.sortEvents = function sortEvents() {
  $(".single-event", this[0]).sort(dec_sort).appendTo(this[0]);
  function dec_sort(a, b){ return ($(b).data("start")) < ($(a).data("start")) ? 1 : -1; }
}

// $(".js-sort")
// $(".js-sort").sortEvents();

$(".js-sort").each(function() {
  $(this).sortEvents();
});

$(".js-link-none").click(function(event){
  event.preventDefault();
});
