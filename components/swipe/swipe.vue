<template>
  <div class="mint-swipe">
    <div class="mint-swipe-items-wrap" ref="wrap">
      <slot></slot>
    </div>
    <div class="mint-swipe-indicators" v-show="showIndicators">
      <div class="mint-swipe-indicator"
        v-for="(page, $index) in pages"
        :class="{ 'is-active': $index === index }"></div>
    </div>
  </div>
</template>

<script>
  import { once } from 'wind-dom/src/event';
  import { addClass, removeClass } from 'wind-dom/src/class';

  export default {
    name: 'swipe',

    created() {
      this.dragState = {};
    },

    data() {
      return {
        ready: false,
        dragging: false,
        userScrolling: false,
        animating: false,
        index: 0,
        pages: [],
        timer: null,
        reInitTimer: null,
        noDrag: false,
        isDone: false
      };
    },

    props: {
      direction: {
        type: String,
        default: 'horizontal'
      },

      speed: {
        type: Number,
        default: 300
      },

      defaultIndex: {
        type: Number,
        default: 0
      },

      auto: {
        type: Number,
        default: 3000
      },

      disabledDrag: {
        type: Boolean,
        default: false
      },

      continuous: {
        type: Boolean,
        default: true
      },

      showIndicators: {
        type: Boolean,
        default: false
      },

      fade: {
        type: Boolean,
        default: false
      },

      noDragWhenSingle: {
        type: Boolean,
        default: true
      },

      prevent: {
        type: Boolean,
        default: false
      },

      stopPropagation: {
        type: Boolean,
        default: false
      }
    },

    watch: {
      index(newIndex) {
        this.$emit('change', newIndex);
      }
    },

    methods: {
      swipeItemCreated() {
        if (!this.ready) return;

        clearTimeout(this.reInitTimer);
        this.reInitTimer = setTimeout(() => {
          this.reInitPages();
        }, 100);
      },

      swipeItemDestroyed() {
        if (!this.ready) return;

        clearTimeout(this.reInitTimer);
        this.reInitTimer = setTimeout(() => {
          this.reInitPages();
        }, 100);
      },

      translate(element, offset, speed, state, callback) {
        var direction = this.direction;
        var fade = this.fade;

        if (speed) {
          this.animating = true;
          element.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease-in-out';
          setTimeout(() => {
            if(direction === 'horizontal') {
              element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;

            } else if(direction === 'vertical') {
              element.style.webkitTransform = `translate3d(0, ${offset}px, 0)`;
            }
            if(fade) {
              var animationName = state === 'current' ? 'swipeItemFadeOut' : 'swipeItemFadeIn';
              element.style.animation = animationName + ' ' + speed + 'ms';
            }
            
          }, 50);

          var called = false;

          var transitionEndCallback = () => {
            if (called) return;
            called = true;
            this.animating = false;
            element.style.webkitTransition = '';
            element.style.webkitTransform = '';
            if (callback) {
              callback.apply(this, arguments);
            }
          };

          once(element, 'webkitTransitionEnd', transitionEndCallback);
          setTimeout(transitionEndCallback, speed + 100); // webkitTransitionEnd maybe not fire on lower version android.
        } else {
          element.style.webkitTransition = '';
          if(direction === 'horizontal') {
            element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;

          } else if(direction === 'vertical') {
            element.style.webkitTransform = `translate3d(0, ${offset}px, 0)`;
          }
        }
      },

      reInitPages() {
        var children = this.$children;
        this.noDrag = children.length === 1 && this.noDragWhenSingle;

        var pages = [];
        var intDefaultIndex = Math.floor(this.defaultIndex);
        var defaultIndex = (intDefaultIndex >= 0 && intDefaultIndex < children.length) ? intDefaultIndex : 0;
        this.index = defaultIndex;

        children.forEach(function(child, index) {
          pages.push(child.$el);

          removeClass(child.$el, 'is-active');

          if (index === defaultIndex) {
            addClass(child.$el, 'is-active');
          }
        });

        this.pages = pages;
      },

      doAnimate(towards, options) {
        if (this.$children.length === 0) return;
        if (!options && this.$children.length < 2) return;

        var prevPage, nextPage, currentPage, pageHeight, offsetTop, pageWidth, offsetLeft;
        var speed = this.speed || 300;
        var index = this.index;
        var pages = this.pages;
        var pageCount = pages.length;
        var direction = this.direction;

        if (!options) {
          pageWidth = this.$el.clientWidth;
          pageHeight = this.$el.clientHeight;
          currentPage = pages[index];
          prevPage = pages[index - 1];
          nextPage = pages[index + 1];
          if (this.continuous && pages.length > 1) {
            if (!prevPage) {
              prevPage = pages[pages.length - 1];
            }
            if (!nextPage) {
              nextPage = pages[0];
            }
          }
          if (prevPage) {
            prevPage.style.display = 'block';
            if(direction === 'horizontal') {
              this.translate(prevPage, -pageWidth);

            } else if(direction === 'vertical') {
              this.translate(prevPage, -pageHeight);
            }
          }
          if (nextPage) {
            nextPage.style.display = 'block';
            if(direction === 'horizontal') {
              this.translate(nextPage, pageWidth);

            } else if(direction === 'vertical') {
              this.translate(nextPage, pageHeight);
            }
          }
        } else {
          prevPage = options.prevPage;
          currentPage = options.currentPage;
          nextPage = options.nextPage;
          pageHeight = options.pageHeight;
          offsetTop = options.offsetTop;
          pageWidth = options.pageWidth;
          offsetLeft = options.offsetLeft;
        }

        var newIndex;

        var oldPage = this.$children[index].$el;

        if (towards === 'prev') {
          if (index > 0) {
            newIndex = index - 1;
          }
          if (this.continuous && index === 0) {
            newIndex = pageCount - 1;
          }
        } else if (towards === 'next') {
          if (index < pageCount - 1) {
            newIndex = index + 1;
          }
          if (this.continuous && index === pageCount - 1) {
            newIndex = 0;
          }
        }

        var callback = () => {
          if (newIndex !== undefined) {
            var newPage = this.$children[newIndex].$el;
            removeClass(oldPage, 'is-active');
            addClass(newPage, 'is-active');

            this.index = newIndex;
          }
          if (this.isDone) {
            this.end();
          }

          if (prevPage) {
            prevPage.style.display = '';
          }

          if (nextPage) {
            nextPage.style.display = '';
          }
        };

        setTimeout(() => {
          if (towards === 'next') {
            this.isDone = true;
            this.before(currentPage);
            if(direction === 'horizontal') {
              this.translate(currentPage, -pageWidth, speed, 'current', callback);

            } else if(direction === 'vertical') {
              this.translate(currentPage, -pageHeight, speed, 'current', callback);
            }
            if (nextPage) {
              this.translate(nextPage, 0, speed, 'next');
            }
          } else if (towards === 'prev') {
            this.isDone = true;
            this.before(currentPage);
            if(direction === 'horizontal') {
              this.translate(currentPage, pageWidth, speed, 'current', callback);

            } else if(direction === 'vertical') {
              this.translate(currentPage, pageHeight, speed, 'current', callback);
            }
            if (prevPage) {
              this.translate(prevPage, 0, speed, 'prev');
            }
          } else {
            this.isDone = false;
            this.translate(currentPage, 0, speed, 'current', callback);
            
            if (direction === 'horizontal' && typeof offsetLeft !== 'undefined') {
              if (prevPage && offsetLeft > 0) {
                this.translate(prevPage, pageWidth * -1, speed, 'prev');
              }
              if (nextPage && offsetLeft < 0) {
                this.translate(nextPage, pageWidth, speed, 'next');
              }
            } else if(direction === 'horizontal') {
              if (prevPage) {
                this.translate(prevPage, pageWidth * -1, speed, 'prev');
              }
              if (nextPage) {
                this.translate(nextPage, pageWidth, speed, 'next');
              }
            }

            if (direction === 'vertical' && typeof offsetTop !== 'undefined') {
              if (prevPage && offsetTop > 0) {
                this.translate(prevPage, pageHeight * -1, speed, 'prev');
              }
              if (nextPage && offsetTop < 0) {
                this.translate(nextPage, pageHeight, speed, 'next');
              }
            } else if(direction === 'vertical') {
              if (prevPage) {
                this.translate(prevPage, pageHeight * -1, speed, 'prev');
              }
              if (nextPage) {
                this.translate(nextPage, pageHeight, speed, 'next');
              }
            }
          }
        }, 10);
      },

      next() {
        this.doAnimate('next');
      },

      prev() {
        this.doAnimate('prev');
      },

      before() {
        this.$emit('before', this.index);
      },

      end() {
        this.$emit('end', this.index);
      },

      doOnTouchStart(event) {
        if (this.noDrag || this.disabledDrag) return;

        var element = this.$el;
        var dragState = this.dragState;
        var touch = event.touches[0];

        dragState.startTime = new Date();
        dragState.startLeft = touch.pageX;
        dragState.startTop = touch.pageY;
        dragState.startTopAbsolute = touch.clientY;

        dragState.pageWidth = element.offsetWidth;
        dragState.pageHeight = element.offsetHeight;

        var prevPage = this.$children[this.index - 1];
        var dragPage = this.$children[this.index];
        var nextPage = this.$children[this.index + 1];

        if (this.continuous && this.pages.length > 1) {
          if (!prevPage) {
            prevPage = this.$children[this.$children.length - 1];
          }
          if (!nextPage) {
            nextPage = this.$children[0];
          }
        }

        dragState.prevPage = prevPage ? prevPage.$el : null;
        dragState.dragPage = dragPage ? dragPage.$el : null;
        dragState.nextPage = nextPage ? nextPage.$el : null;

        if (dragState.prevPage) {
          dragState.prevPage.style.display = 'block';
        }

        if (dragState.nextPage) {
          dragState.nextPage.style.display = 'block';
        }
      },

      doOnTouchMove(event) {
        if (this.noDrag || this.disabledDrag) return;

        var dragState = this.dragState;
        var touch = event.touches[0];

        dragState.currentLeft = touch.pageX;
        dragState.currentTop = touch.pageY;
        dragState.currentTopAbsolute = touch.clientY;

        var offsetLeft = dragState.currentLeft - dragState.startLeft;
        var offsetTop = dragState.currentTopAbsolute - dragState.startTopAbsolute;

        var distanceX = Math.abs(offsetLeft);
        var distanceY = Math.abs(offsetTop);
        if (distanceX < 5 || (distanceX >= 5 && distanceY >= 1.73 * distanceX)) {
          this.userScrolling = true;
          return;
        } else {
          this.userScrolling = false;
          event.preventDefault();
        }
        offsetLeft = Math.min(Math.max(-dragState.pageWidth + 1, offsetLeft), dragState.pageWidth - 1);

        var towards = offsetLeft < 0 ? 'next' : 'prev';

        if (dragState.prevPage && towards === 'prev') {
          this.translate(dragState.prevPage, offsetLeft - dragState.pageWidth);
        }
        this.translate(dragState.dragPage, offsetLeft);
        if (dragState.nextPage && towards === 'next') {
          this.translate(dragState.nextPage, offsetLeft + dragState.pageWidth);
        }
      },

      doOnTouchEnd() {
        if (this.noDrag || this.disabledDrag) return;

        var dragState = this.dragState;

        var dragDuration = new Date() - dragState.startTime;
        var towards = null;

        var offsetLeft = dragState.currentLeft - dragState.startLeft;
        var offsetTop = dragState.currentTop - dragState.startTop;
        var pageWidth = dragState.pageWidth;
        var index = this.index;
        var pageCount = this.pages.length;

        if (dragDuration < 300) {
          let fireTap = Math.abs(offsetLeft) < 5 && Math.abs(offsetTop) < 5;
          if (isNaN(offsetLeft) || isNaN(offsetTop)) {
            fireTap = true;
          }
          if (fireTap) {
            this.$children[this.index].$emit('tap');
          }
        }

        if (dragDuration < 300 && dragState.currentLeft === undefined) return;

        if (dragDuration < 300 || Math.abs(offsetLeft) > pageWidth / 2) {
          towards = offsetLeft < 0 ? 'next' : 'prev';
        }

        if (!this.continuous) {
          if ((index === 0 && towards === 'prev') || (index === pageCount - 1 && towards === 'next')) {
            towards = null;
          }
        }

        if (this.$children.length < 2) {
          towards = null;
        }

        this.doAnimate(towards, {
          offsetLeft: offsetLeft,
          pageWidth: dragState.pageWidth,
          prevPage: dragState.prevPage,
          currentPage: dragState.dragPage,
          nextPage: dragState.nextPage
        });

        this.dragState = {};
      },

      initTimer() {
        if (this.auto > 0 && !this.timer) {
          this.timer = setInterval(() => {
            if (!this.continuous && (this.index >= this.pages.length - 1)) {
              return this.clearTimer();
            }
            if (!this.dragging && !this.animating) {
              this.next();
            }
          }, this.auto);
        }
      },

      clearTimer() {
        clearInterval(this.timer);
        this.timer = null;
      }
    },

    destroyed() {
      if (this.timer) {
        this.clearTimer();
      }
      if (this.reInitTimer) {
        clearTimeout(this.reInitTimer);
        this.reInitTimer = null;
      }
    },

    mounted() {
      this.ready = true;

      this.initTimer();

      this.reInitPages();

      var element = this.$el;

      element.addEventListener('touchstart', (event) => {
        if (this.prevent) event.preventDefault();
        if (this.stopPropagation) event.stopPropagation();
        if (this.animating) return;
        this.dragging = true;
        this.userScrolling = false;
        this.doOnTouchStart(event);
      });

      element.addEventListener('touchmove', (event) => {
        if (!this.dragging) return;
        if (this.timer) this.clearTimer();
        this.doOnTouchMove(event);
      });

      element.addEventListener('touchend', (event) => {
        if (this.userScrolling) {
          this.dragging = false;
          this.dragState = {};
          return;
        }
        if (!this.dragging) return;
        this.initTimer();
        this.doOnTouchEnd(event);
        this.dragging = false;
      });
    }
  };
</script>
