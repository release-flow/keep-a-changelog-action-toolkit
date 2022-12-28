import semver, { ReleaseType } from 'semver';

export interface RepoOptions {
  owner: string;
  repo: string;
}

export interface PrepareReleaseOptions {
  changelogPath: string;
  releaseType: ReleaseType;
  prereleaseIdentifier?: string;
  releaseDate: Date;
  tagPrefix: string;
  repo: RepoOptions;
  outputFile: string | undefined;
}

export type SpecialVersionOption = 'unreleased' | 'latest' | 'latest-or-unreleased';
export type VersionOptionSpec = semver.SemVer | SpecialVersionOption;

// This is a compiler-safe mechanism to ensure that all possible ReleaseType values are defined. If the ReleaseType type
// definition changes (not under our control, it's part of the node-semver library) then this definition will cause a
// compile-time error. See https://stackoverflow.com/a/66820587/260213 for the inspiration.
const validReleaseTypes: Record<ReleaseType, unknown> = {
  major: true,
  premajor: true,
  minor: true,
  preminor: true,
  patch: true,
  prepatch: true,
  prerelease: true,
};

export function isValidReleaseType(maybe: string): maybe is ReleaseType {
  return validReleaseTypes.hasOwnProperty(maybe);
}

export function isSpecialVersionOption(maybe: VersionOptionSpec): maybe is SpecialVersionOption {
  return maybe === 'latest' || maybe === 'unreleased' || maybe === 'latest-or-unreleased';
}

export function parseVersionOption(version: string): VersionOptionSpec | undefined {
  let target: VersionOptionSpec;

  switch (version) {
    case 'unreleased':
    case 'latest':
    case 'latest-or-unreleased':
      target = version;
      break;

    default:
      const parsed = semver.parse(version);
      if (!parsed) {
        return;
      }
      target = parsed;
      break;
  }

  return target;
}

export function isValidVersionOption(version: string): boolean {
  return !!parseVersionOption(version);
}
