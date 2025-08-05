# Scripture Forge help site

The Scripture Forge help site, served at [help.scriptureforge.org](https://help.scriptureforge.org)

This site is built with [Docusaurus](https://docusaurus.io/). Translations are done via Crowdin.

- To update files from Crowdin, run `./update.mts`

- To preview changes, run `npm start`. Docusaurus will start a local development server, but localizations will not work (a limitation of Docusaurus). To preview localizations, run a full build.

- To run a build, run `build.sh`. This will create a `build` directory with the static site. You can then preview the site with `npm run serve`.

- To deploy, run `deploy.sh`. Environment variables must be set for this to work. See the script for details. The deploy will create a preview on Netlify but will not go live without manual intervention.

# Running on Windows Subsystem Linux

- If you are a Windows user, please use the WSL/WSL2 terminal to perform the above tasks. You will want the following installed the following from the WSL/WSL2 terminal (additional applications may be needed):
  - dos2unix (used to update the line endings of the .sh files to run on WSL/WSL2) `sudo apt-get install dos2unix`
  - [deno](https://docs.deno.com/runtime/getting_started/installation/) 

- To set the environment variables, you will want to open an administrative command prompt and `setx VARIABLE` each variable and then run `setx WSLENV VARIABLE/u` seperating each variable with a colon, to share them with WSL/WSL2 when running the `update.mts`.