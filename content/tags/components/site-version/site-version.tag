<site-version>
  <style>
    .div-site-version {
      text-align: center;
    }
  </style>
  <div class="div-site-version">
    <br />
    <p>
      <small>
        Example: Copyright © { opts.year }<br />
        This is a Footer
      </small><br />
    { opts.version }
  </p>
  </div>
  <script>
    require('./site-version.js').call(this, this.opts)
  </script>
</site-version>
