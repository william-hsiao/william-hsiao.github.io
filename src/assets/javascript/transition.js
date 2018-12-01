export const transitions = {
  methods: {
    viewTemplate(from, to, transition = 'random') {
      return new Promise((resolve) => {
        const frame = this.$el.getElementsByClassName('frame')[0];
        const fromTemplate = this.$el.getElementsByClassName(from)[0];
        const toTemplate = this.$el.getElementsByClassName(to)[0];
        const windowViewportHeight = window.innerHeight - 200;
        let effect, paddingHeight;

        const transitionEffects = ['fade-up', 'fade-down', 'fade-left', 'fade-right'];
        if (transition === 'random') {
          effect = transitionEffects[Math.floor(Math.random() * Math.floor(transitionEffects.length))];
        } else {
          effect = transition;
        }

        fromTemplate.classList.add('standby', `${effect}-out`);
        fromTemplate.classList.remove('active');
        toTemplate.classList.add('active', `${effect}-in`);

        if (fromTemplate.offsetHeight > toTemplate.offsetHeight) {
          frame.style.height = `${fromTemplate.offsetHeight}px`;
        }

        if (fromTemplate.offsetHeight > windowViewportHeight && toTemplate.offsetHeight < windowViewportHeight) {
          paddingHeight = (windowViewportHeight - toTemplate.offsetHeight) / 2;
          toTemplate.style.paddingTop = `${paddingHeight}px`;
          toTemplate.style.paddingBottom = `${paddingHeight}px`;
        }
        else if (toTemplate.offsetHeight > windowViewportHeight && fromTemplate.offsetHeight < windowViewportHeight) {
          paddingHeight = (windowViewportHeight - fromTemplate.offsetHeight) / 2;
          fromTemplate.style.paddingTop = `${paddingHeight}px`;
          fromTemplate.style.paddingBottom = `${paddingHeight}px`;
        }
        else if (fromTemplate.offsetHeight < windowViewportHeight && toTemplate.offsetHeight < windowViewportHeight) {
          if (fromTemplate.offsetHeight > toTemplate.offsetHeight) {
            paddingHeight = (fromTemplate.offsetHeight - toTemplate.offsetHeight) / 2;
            toTemplate.style.paddingTop = `${paddingHeight}px`;
            toTemplate.style.paddingBottom = `${paddingHeight}px`;
          } else {
            paddingHeight = (toTemplate.offsetHeight - fromTemplate.offsetHeight) / 2
            fromTemplate.style.paddingTop = `${paddingHeight}px`;
            fromTemplate.style.paddingBottom = `${paddingHeight}px`;
          }
        }

        setTimeout(() => {
          frame.style.height = '';
          toTemplate.style.paddingBottom = '';
          toTemplate.style.paddingTop = '';
          fromTemplate.style.paddingBottom = '';
          fromTemplate.style.paddingTop = '';
          fromTemplate.classList.remove('standby', `${effect}-out`);
          toTemplate.classList.remove(`${effect}-in`);
        }, 2000);

        this.$el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        resolve();
      });
    },
  }
}
