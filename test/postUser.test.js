describe('POST /api/users', () => {
  test('Debería crear un nuevo usuario', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        nombresUsuario: 'Juan Perez',
        celularUsuario: 1234567890
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body.nombresUsuario).toEqual('Juan Perez');
    expect(res.body.celularUsuario).toEqual(1234567890);
  });
  test('Debería dar error si falta algún campo requerido', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        nombresUsuario: 'Juan Perez'
      });
    expect(res.statusCode).toEqual(400);
  });
});
