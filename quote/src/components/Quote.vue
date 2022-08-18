<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <!-- We don't know if we get some content into this slot (we don't get any), so we define the default content directly in between the <slot> tags to be displayed. If we get some content passed from outside, it will override this default content -->
      <span name="subtitle">
        <slot style="color: #ccc">The Subtitle</slot>
      </span>
    </div>
    <hr />
    <div>
      <!-- Here we don't specify a name, so the default (unnamed) <p> content from the parent will be pasted here -->
      <slot></slot>
    </div>
  </div>
</template> 

<script>
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30 px auto;
  text-align: center;
}

h2 {
  color: red;
}
.title {
  font-style: italic;
}
</style>