describe("[APP] Esta es un ejemplo de prueba unitaria", () => {
  test("Esto debe retornar...", () => {

    const a = "8 nombre"
    const b = 2
    const c = a + b
    expect(c).toEqual(12)

  })
})
