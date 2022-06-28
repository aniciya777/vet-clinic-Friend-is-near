<template>
  <div>
    <label v-if="label" :for="inputId" class="form-label">{{ label }}</label>
    <input
      :type="inputType"
      :required="required"
      :placeholder="placeholder"
      :id="inputId"
      :name="name"
      v-model="value"
      class="form-control"
      @input.prevent="handlerInput"
    />
  </div>
</template>

<script>
export default {
  name: "UIFormInput",
  data () {
    return {
      value: '',
    };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
      default: '',
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    required: {
      type: Boolean,
      required: false,
      default: true,
    },
    callback: {
      type: Function,
      required: false,
      default: () => {},
    }
  },
  computed: {
    inputId () {
      return `id-${this.name}`;
    },
  },
  methods: {
    handlerInput () {
      const data = {
        name: this.name,
        value: this.value
      };
      this.$emit('changeInput', data);
    }
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/scss/main";

  .form-control {
    background: #FFFFFF;
    border: 2px solid #000000;
    border-radius: 30px;
    font-size: rel_font_size(25px);
    padding: 9px 20px;
    margin-bottom: 15px;
  }

  .form-label {
    font-size: 1rem;
    text-align: left;
    margin-bottom: 15px;
  }
</style>
