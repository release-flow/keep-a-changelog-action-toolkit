export { ChangelogError, ReleaseHeading } from './types.js';
export { VersionOptionSpec, SpecialVersionOption, isValidVersionOption } from './options.js';

export { default as assert } from './plugins/assert.js';
export { default as bridge } from './plugins/bridge.js';
export { default as calculateNextRelease } from './plugins/calculate-next-release.js';
export { default as checkUnreleasedSectionExists } from './plugins/check-unreleased-section-exists.js';
export { default as extractReleaseInfo } from './plugins/extract-release-info.js';
export { default as incrementRelease } from './plugins/increment-release.js';
export { default as preprocess } from './plugins/preprocessor.js';
export { default as releaseParser } from './plugins/release-parser.js';
export { default as updateLinkDefinitions } from './plugins/update-link-definitions.js';

export { ActionResult, OutputVariables, getAllErrors, getAllWarnings, invokeActionScript } from './test-utils.js';
