<template>
  <div class="m-input">
    <input
      :placeholder="placeholder"
      :value="value"
      :type="type === 'password' ? 'tel' : type"
      @input="changeValue"
      :maxlength="maxlength"
    />

    <!-- 清空 start -->
    <div class="m-input_empty" v-show="value && isShowEmpty" @click="handleEmpty">
      <p></p>
    </div>
    <!-- 清空 end -->
  </div>
</template>

<script>
/**
 * @prop {String} type 类型 *必传 (.sync)
 * @prop {String | Number} value 值 *必传 (.sync)
 * @prop {Boolean} isShowEmpty 是否显示清空icon 默认显示
 * @prop {String} placeholder 提示
 * @prop {Number} maxlength 最大长度
 */

export default {
  name: "MInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: [String, Number]
    },
    isShowEmpty: {
      type: Boolean,
      default: true
    },
    placeholder: {
      type: String,
      default: "请输入"
    },
    maxlength: {
      type: Number,
      default: 100
    }
  },
  methods: {
    // 透传
    changeValue(el) {
      this.$emit("update:value", el.target.value);
    },
    // 清空
    handleEmpty() {
      // password reset
      this.$emit("update:value", "");
    }
  }
};
</script>

<style lang="less" src="./index.less"></style>