describe('DELETE /api/users/:id', () => {
  test('Debería eliminar un usuario existente', async () => {
    const res = await request(app).delete(`/api/users/${newUserId}`);
    expect(res.statusCode).toEqual(200);
  });
  test('Debería dar error si se le pasa un ID inválido', async () => {
    const res = await request(app).delete('/api/users/12345');
    expect(res.statusCode).toEqual(500);
  });
});
