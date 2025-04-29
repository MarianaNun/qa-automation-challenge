import { test } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const wikipediaUsername = process.env.WIKIPEDIA_USERNAME;
const wikipediaPassword = process.env.WIKIPEDIA_PASSWORD;
const authFile = 'src/auth/login.json';

test('Sign in to Wikipedia and save storage state', async ({ page, context }) => {
  if (!wikipediaUsername || !wikipediaPassword) {
    throw new Error('Need a username and password to sign in!');
  }

  await page.goto('https://auth.wikimedia.org/enwiki/wiki/Special:UserLogin');
  const emailInput = page.getByPlaceholder('Enter your username');
  await emailInput.fill(wikipediaUsername);
  const passwordInput = page.getByPlaceholder('Enter your password');
  await passwordInput.fill(wikipediaPassword);

  await page.getByRole('button', {name: 'Log in'}).click();
  
  await context.storageState({ path: authFile });
});
