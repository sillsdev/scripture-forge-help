# Scripture Forge help site

The Scripture Forge help site, served at [help.scriptureforge.org](https://help.scriptureforge.org)

This site is built with [Docusaurus](https://docusaurus.io/). Documentation files are stored in Notion, and the manual is on an S3 bucket. The build process pulls the files from Notion and S3 and builds the site, but this process currently has a number of problems. Files need to be uploaded to Crowdin separately, and downloaded once translations are complete.

- To download files from Notion and S3, run `pull_docs.sh`. Several environment variables must be set for this to work. See the script for details. If you don't have the AWS CLI installed and authenticated, you can pass `--skip-pulling-from-s3` to not update the manual from S3.

- To preview changes, run `npm start`. Docusaurus will start a local development server, but localizations will not work (a limitation of Docusaurus). To preview localizations, run a full build.

- To run a build, run `build.sh`. This will create a `build` directory with the static site. You can then preview the site with `npm run serve`. However, this won't properly serve the manual, since it's outside of Docusaurus. A better preview can be had by running `python3 -m http.server` in the `build` directory.

- To deploy, run `deploy.sh`. Environment variables must be set for this to work. See the script for details. The deploy will create a preview on Netlify but will not go live without manual intervention.