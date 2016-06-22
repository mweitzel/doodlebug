Object.freeze(
   typeof global !== 'undefined' ? global : null
|| typeof window !== 'undefined' ? window : null
|| this
)
