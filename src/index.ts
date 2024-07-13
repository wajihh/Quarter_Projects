// First project using inquirer
import inquirer from 'inquirer';

async function main() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter a text to count words:'
    }
  ]);

  const text = answers.text.trim();
  const wordCount = text ? text.split(/\s+/).length : 0;

  console.log(`Word count: ${wordCount}`);
}

main().catch(error => console.error(error));
