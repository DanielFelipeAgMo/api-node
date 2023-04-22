describe('PUT /api/users/:id', () => {
  test('Debería actualizar un usuario existente', async () => {
    const res = await request(app)
      .put(`/api/users/${newUserId}`)
      .send({
        nombresUsuario: 'Juan Perez',
        celularUsuario: 9876543210
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.celularUsuario).toEqual(9876543210);
  });
  test('Debería dar error si se le pasa un ID inválido', async () => {
    const res = await request(app)
      .put('/api/users/12345')
      .send({
        nombresUsuario: 'Juan Perez',
        celularUsuario: 9876543210
      });
    expect(res.statusCode).toEqual(500);
  });
});
