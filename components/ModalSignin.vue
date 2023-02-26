<template>
  <div>
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title" id="staticBackdropLabel">Please Sign In</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <FormSignin />
          </div>
          <div class="modal-footer d-flex justify-content-start">
            <div>
                <p class="text-muted">&copy; Gramedlite, Inc</p>
            </div>
            <div class="ms-auto">
                <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
                >
                Close
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormSignin from "./FormSignin.vue";

export default { components: { FormSignin } };
</script>
<style></style>
