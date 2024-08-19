import { awscdk, javascript } from 'projen';
import { DependabotScheduleInterval } from 'projen/lib/github';

const project = new awscdk.AwsCdkConstructLibrary({
  name: 'cdk-fck-nat',
  license: 'MIT',
  author: 'Andrew Guenther',
  authorAddress: 'guenther.andrew.j@gmail.com',
  repositoryUrl: 'https://github.com/AndrewGuenther/cdk-fck-nat.git',
  description: 'A NAT Gateway instance construct built on the fck-nat AMI.',
  majorVersion: 1,

  cdkVersion: '2.147.3',
  devDeps: ['dotenv'],

  dependabot: true,
  dependabotOptions: {
    scheduleInterval: DependabotScheduleInterval.MONTHLY,
  },
  autoApproveUpgrades: true,
  autoApproveOptions: {
    allowedUsernames: ['dependabot[bot]'],
  },

  defaultReleaseBranch: 'main',

  packageName: 'cdk-fck-nat',
  publishToPypi: {
    distName: 'cdk-fck-nat',
    module: 'cdk_fck_nat',
  },
  publishToMaven: {
    javaPackage: 'fr.fabienfleureau.cdk_fck_nat',
    mavenGroupId: 'fr.fabienfleureau',
    mavenArtifactId: 'cdk-fck-nat',
  },

  gitignore: ['.env', 'cdk.context.json', 'cdk.out'],

  projenrcTs: true,
  jsiiVersion: '~5.3',
  typescriptVersion: '~5.3',
});

new javascript.Prettier(project, {
  settings: { singleQuote: true, printWidth: 120 },
});

project.synth();
