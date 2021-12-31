
import Modal from '../../components/modal';
import Vue from 'vue';

let ImperativeModalIndex = 0;
let ImperativeModals = {};
const createInstance = (options = {}, index) => {
  const { baseProps, onClose, onOk, render, store } = options;
  let ModalInstance = new Vue({
    name: 'ImperativeModal',
    data() {
      return {
        visible: false,
      };
    },
    computed: {
      warpStyle() {
        return {
          padding:'20px',
          overflowY: 'auto',
          height: baseProps.height || 'auto',
        };
      },
    },
    methods: {
      open() {
        this.visible = true;
      },
      cancel() {
        this.visible = false;
        setTimeout(() => {
          this.$destroy();
          onClose && onClose();
        }, 300);
      },
      ok() {
        onOk(this.cancel);
      },
    },
    render(h) {
      let that = this;
      const props = {
        props: {
          ...baseProps,
          visible: this.visible,
          bodyStyle: {
            padding:0,
          },
        },
        on: {
          cancel: this.cancel,
          ok: () => {
            that.ok(that.cancel);
          },
        },
      };
      return (
        <Tooltip {...props}>
          <div style={ this.warpStyle }>
            {render && render(h, this.cancel)}
          </div>
        </Tooltip>
      );
    },
  });
  return ModalInstance;
};

export default {
  show (options) {
    const instance = createInstance(options, ImperativeModalIndex);
    const el = instance.$mount().$el;
    document.body.appendChild(el);
    setTimeout(() => {
      instance.open();
      ImperativeModals[imperativeModal-${ImperativeModalIndex}-instance] = instance;
      ImperativeModalIndex++;
    }, 0);
  },
};



// import superModal from '/'

// superModal.show({
//   title: '',
//   content:()=><div> biandao 1</div>,
// });

// superModal.show({
//   title: '',
//   content:()=><div> biandao 2</div>
// })