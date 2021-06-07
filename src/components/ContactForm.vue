<template>
    <div class="row mt-4">
      <div class="col-8 offset-2" id="contact-form">
        <span class="text-center">
        <h2 class="text-center">Contact me!</h2>
        <form action="https://formspree.io/f/xzbyrlrg" method="POST">
          <div class="form-group">
            <label for="full_name">Your name</label>
            <input ref="fullNameInput" placeholder="Jonh Smith" type="text" class="form-control" name="fullName">
          </div>

          <div class="form-group">
            <label for="_replyto">Your email</label>
            <input placeholder="your_email@example.com" type="email" class="form-control" name="_replyto">
          </div>

          <div class="form-group">
            <label for="message">Your message</label>
            <textarea placeholder="Let me know how I can help you" class="form-control"  name="message"></textarea>
          </div>

          <!-- your other form fields go here -->

          <button type="submit" class="btn btn-info mb-2">Send</button>
        </form>
        </span>

      </div>
    </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>
