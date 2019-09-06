<script>
  export let src = "";
  export let size = 24;
  export let title = "";
  export let fillColor = "#2d2d2d";
</script>

<span
  aria-hidden="true"
  aria-label={title}
  class="material-design-icon"
  role="img">
  <svg
    fill={fillColor}
    class="material-design-icon__svg"
    width={size}
    height={size}
    viewBox="0 0 24 24">
    <path d={src}>
      <title>{title}</title>
    </path>
  </svg>
</span>
