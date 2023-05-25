<template>
  <div
    v-if="element == 'input'"
    class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4"
    :class="[modelValue == '' && error ? 'border-red-400' : '']"
  >
    <slot name="icon"></slot>

    <input
      class="pl-2 outline-none border-none"
      :class="class"
      :type="type"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      :value="modelValue"
      @input="inputValue"
      v-model.trim="initialValue"
    />
  </div>

  <select
    v-if="element == 'dropdown'"
    class="pl-2 flex items-center border-2 py-2 px-3 rounded-2xl mb-4 w-full"
    :class="[modelValue == '' && error ? 'border-red-400' : '']"
    :type="type"
    :name="name"
    :id="id"
    :value="modelValue"
    @change="inputValue"
    v-model.trim="initialValue"
  >
    <option value="" selected disabled hidden>
      {{ placeholder }}
    </option>
    <option v-for="data in datas" :key="data" :value="data">
      {{ data }}
    </option>
  </select>

  <p v-if="modelValue == '' && error" class="mb-4 -mt-3 text-red-400">
    This input is required.
  </p>
</template>

<script>
export default {
  name: "BaseInput",
  props: [
    "type",
    "name",
    "id",
    "placeholder",
    "element",
    "class",
    "datas",
    "modelValue",
    "error",
  ],
  emits: ["update:modelValue"],
  data() {
    return {
      initialValue: "",
    };
  },
  methods: {
    inputValue() {
      this.$emit("update:modelValue", this.initialValue);
    },
  },
};
</script>
