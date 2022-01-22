<script>
import { onMounted, ref, watch, toRefs, computed } from 'vue'
import ComponentTest from './component-test.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(props) {
    console.log('收到的属性值', props);

    let { msg } = toRefs(props);
    console.log('从父组件传进来的参数', msg)

    let name = ref('Tom');
    console.log('name', name)
    console.log('name.value', name.value)

    let computedMsg = computed(() => {
      return name.value + 'computed!!!!!'
    })
    console.log('computedMsg', computedMsg)

    let changeName = () => {
      setTimeout(() => {
        name.value = 'Jack';
      }, 2000)
    }

    watch(name, (newVal, oldValue) => {
      console.log('name old value is', oldValue)
      console.log('name new value is', newVal)
    })

    let rangeValue = ref(1);

    function onRangeValueChange(e) {
      rangeValue.value = e.target.value;
      console.log('rangeValue is ', rangeValue)

      let photoEle = document.getElementsByClassName('photo')[0];
      photoEle.style.filter = `grayscale(${rangeValue.value}%) blur(0) contrast(100%)`;
    }

    onMounted(changeName)


    // return () => h('div', {}, [
    //   msg.value,
    //   h('div', {}, computedMsg.value),
    //   h('div', {}, name.value)
    // ])

    return () => (
      <div class='test'>
        <div class='container'>
          <div class='photo'></div>
          <div class='controlPanel'>
            <div>
              <span>图片灰度控制条</span>
              <input type='range' max='100' min='0' value={rangeValue.value} step='1' onChange={onRangeValueChange}></input>
            </div>
          </div>
          <div>
            <span class='text-photo'>图片文字</span>
          </div>
          <div class='ani'>
            <div class='ant'>
              测试测试测试
              <button class='ant-button'>ant-btm</button>
            </div>
          </div>
          <ComponentTest></ComponentTest>
        </div>
      </div>
    )
  },
  mounted() {
    console.log('组件自身的mounted被执行')
    console.log('打印name的值', this.name);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>

.test {
  .container {
    display: flex;
    flex-direction: row;

    .photo {
      height: 100px;
      width: 200px;
      background-image: url('../assets/1.jpeg');
      background-position: center;
    }

    .controlPanel {
      margin-left: 20px;
      input {
        width: 200px;
      }
    }

    @normalColor: red;
    @beforeAlias: text;
    @typeName: border;
    @borderStyle: 1px solid;

    .@{beforeAlias}-photo {
      color: @normalColor;
      @{typeName}: @borderStyle;
    }

    .ani {
      background-image: url('../assets/1.jpeg');
      background-position: center;
      background-repeat: no-repeat;
      width: 500px;
      height: 500px;

      .ant {
        color: red;

        .ant-button {
          color: blue
        }
      }
      // transition: width 2s ease-in-out;

      &:hover {
        animation-name: myAnimation;
        animation-duration: 3s;
      }

      &-test {
        color: red;
      }
    }

    .keyframes(myAnimation)

    // .ani:hover {
    //   width: 300px;
    // }
  }

  .keyframes(@name) {
    @keyframes @name {
      from {
        filter: grayscale(0%);
      }
      to {
        filter: grayscale(100%);
      }
    }
  }

}

</style>
