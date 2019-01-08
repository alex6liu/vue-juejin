<template>
    <div>
        <a-input-search
            placeholder="input search text"
            @search="onSearch"
            enterButton
        />
    </div>
</template>

<script>
export default {
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
};
</script>
