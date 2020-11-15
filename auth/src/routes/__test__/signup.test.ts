import request from 'supertest';
import { app } from '../../app';

it("this returns  201 on successful signup test", async () => {
  return request(app)
    .post('/api/users/signup')
    .send(
      {
        email: 'abc@abc.com',
        password:'11saw'
      }
  )
  .expect(201)
});

it("disallows duplicates on signup", async () => {
  await request(app)
    .post('/api/users/signup')
    .send(
      {
        email: 'abc@abc.com',
        password:'11saw'
      }
  )
    .expect(201)
  
  await request(app)
    .post('/api/users/signup')
    .send(
      {
        email: 'abc@abc.com',
        password:'11saw'
      }
  )
  .expect(400)
});

it("invalid email test", async () => {
  return request(app)
    .post('/api/users/signup')
    .send(
      {
        email: 'abasdaf',
        password:'11saw'
      }
  )
  .expect(400)
});

it("sets a cookie after signup test", async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send(
      {
        email: 'abc@abc.com',
        password:'11saw'
      }
  )
    .expect(201)
  console.log(response.get('Set-Cookie'));
  expect(response.get('Set-cookie')).toBeDefined();
});