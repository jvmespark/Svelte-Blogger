import { publish } from 'gh-pages';
import * as custom from 'blogger-config.json';

publish(
 'build',
 {
  branch: custom.branch,
  repo: custom.repo,
  user: {
   name: custom.name,
   email: custom.email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
