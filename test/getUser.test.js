describe('GET /api/users/:id', () => {
  test('Debería obtener un usuario por su ID', async () => {
    const res = await request(app).get(`/api/users/${newUserId}`);
    expect(res.statusCode).toEqual(404);
  });
  test('Debería dar error si se le pasa un ID inválido', async () => {
    const res = await request(app).get('/api/users/12345');
    expect(res.statusCode).toEqual(500);
  });
});
