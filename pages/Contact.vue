<template>
  <div>
    <ContactItem label="Email">
      <a @click="mailto()">
        bertilxi at gmail.com
      </a>
    </ContactItem>
    <ContactItem label="LinkedIn">
      <a
        href="https://www.linkedin.com/in/fernando-ivan-berti-81717b37"
        target="_blank"
      >
        Fernando Ivan Berti
      </a>
    </ContactItem>
    <ContactItem label="Github">
      <a href="https://github.com/bertilxi" target="_blank">
        bertilxi
      </a>
    </ContactItem>
  </div>
</template>

<script>
import ContactItem from "@/components/ContactItem.vue";

export default {
  components: { ContactItem },
  methods: {
    mailto() {
      window.open("mailto:bertilxi@gmail.com");
    }
  }
};
</script>
