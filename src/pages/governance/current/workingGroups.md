Core Working Groups

Core Working Groups are created by the Technical Steering Committee (TSC).
Current Working Groups

    Addon API
    Benchmarking
    Build
    Diagnostics
    Docker
    Evangelism
    i18n
    Release
    Security
    Streams

Addon API

The Addon API Working Group is responsible for maintaining the NAN project and corresponding nan package in npm. The NAN project makes available an abstraction layer for native add-on authors for Node.js, assisting in the writing of code that is compatible with many actively used versions of Node.js, V8 and libuv.

Responsibilities include:

    Maintaining the NAN GitHub repository, including code, issues and documentation.
    Maintaining the addon-examples GitHub repository, including code, issues and documentation.
    Maintaining the C++ Addon API within the Node.js project, in subordination to the Node.js TSC.
    Maintaining the Addon documentation within the Node.js project, in subordination to the Node.js TSC.
    Maintaining the nan package in npm, releasing new versions as appropriate.
    Messaging about the future of the Node.js and NAN interface to give the community advance notice of changes.

The current members can be found in their README.
Benchmarking

The purpose of the Benchmark Working Group is to gain consensus on an agreed set of benchmarks that can be used to:

    track and evangelize performance gains made between Node.js releases
    avoid performance regressions between releases

Responsibilities include:

    Identifying 1 or more benchmarks that reflect customer usage. Likely will need more than one to cover typical Node.js use cases including low-latency and high concurrency
    Working to get community consensus on the list chosen
    Adding regular execution of chosen benchmarks to Node.js builds
    Tracking/publicizing performance between builds/releases

Build

The Build Working Group's purpose is to create and maintain a distributed automation infrastructure.

Responsibilities include:

    Producing packages for all target platforms.
    Running tests.
    Running performance testing and comparisons.
    Creating and managing build-containers.

Diagnostics

The Diagnostics Working Group's purpose is to surface a set of comprehensive, documented, and extensible diagnostic interfaces for use by Node.js tools and JavaScript VMs.

Responsibilities include:

    Collaborating with V8 to integrate v8_inspector into Node.js.
    Collaborating with V8 to integrate trace_event into Node.js.
    Collaborating with Core to refine async_wrap and async_hooks.
    Maintaining and improving OS trace system integration (e.g. ETW, LTTNG, dtrace).
    Documenting diagnostic capabilities and APIs in Node.js and its components.
    Exploring opportunities and gaps, discussing feature requests, and addressing conflicts in Node.js diagnostics.
    Fostering an ecosystem of diagnostics tools for Node.js.
    Defining and adding interfaces/APIs in order to allow dumps to be generated when needed.
    Defining and adding common structures to the dumps generated in order to support tools that want to introspect those dumps.

Docker

The Docker Working Group's purpose is to build, maintain, and improve official Docker images for the Node.js project.

Responsibilities include:

    Keeping the official Docker images updated in line with new Node.js releases.
    Decide and implement image improvements and/or fixes.
    Maintain and improve the images' documentation.

Evangelism

The Evangelism Working Group promotes the accomplishments of Node.js and lets the community know how they can get involved.

Responsibilities include:

    Facilitating project messaging.
    Managing official project social media.
    Handling the promotion of speakers for meetups and conferences.
    Handling the promotion of community events.
    Publishing regular update summaries and other promotional content.

i18n

The i18n Working Groups handle more than just translations. They are endpoints for community members to collaborate with each other in their language of choice.

Each team is organized around a common spoken language. Each language community might then produce multiple localizations for various project resources.

Responsibilities include:

    Translating any Node.js materials they believe are relevant to their community.
    Reviewing processes for keeping translations up to date and of high quality.
    Managing and monitoring social media channels in their language.
    Promoting Node.js speakers for meetups and conferences in their language.

Each language community maintains its own membership.

    nodejs-ar - Arabic (العَرَبِيَّة)
    nodejs-bg - Bulgarian (български)
    nodejs-bn - Bengali (বাংলা)
    nodejs-zh-CN - Chinese (简体中文)
    nodejs-cs - Czech (Čeština)
    nodejs-da - Danish (Dansk)
    nodejs-de - German (Deutsch)
    nodejs-el - Greek (Ελληνικά)
    nodejs-es - Spanish (Español)
    nodejs-fa - Persian (فارسی)
    nodejs-fi - Finnish (Suomi)
    nodejs-fr - French (Français)
    nodejs-he - Hebrew (עברית)
    nodejs-hi - Hindi (हिन्दी)
    nodejs-hu - Hungarian (Magyar)
    nodejs-id - Indonesian (Bahasa Indonesia)
    nodejs-it - Italian (Italiano)
    nodejs-ja - Japanese (日本語)
    nodejs-ka - Georgian (ქართული)
    nodejs-ko - Korean (한국어)
    nodejs-mk - Macedonian (Македонски)
    nodejs-ms - Malay (بهاس ملايو‎)
    nodejs-nl - Dutch (Nederlands)
    nodejs-no - Norwegian (Norsk)
    nodejs-pl - Polish (Język Polski)
    nodejs-pt - Portuguese (Português)
    nodejs-ro - Romanian (Română)
    nodejs-ru - Russian (Русский)
    nodejs-sv - Swedish (Svenska)
    nodejs-ta - Tamil (தமிழ்)
    nodejs-tr - Turkish (Türkçe)
    nodejs-zh-TW - Taiwanese (繁體中文（台灣）)
    nodejs-uk - Ukrainian (Українська)
    nodejs-vi - Vietnamese (Tiếng Việt)

Release

The Release Working Group manages the release process for Node.js.

Responsibilities include:

    Define the release process.
    Define the content of releases.
    Generate and create releases.
    Test Releases.
    Manage the Long Term Support and Current branches including backporting changes to these branches.
    Define the policy for what gets backported to release streams

Security

The Security Working Group manages all aspects and processes linked to Node.js security.

Responsibilities include:

    Define and maintain security policies and procedures for:
        the core Node.js project
        other projects maintained by the Node.js Technical Steering Committee (TSC).
    Work with the Node Security Platform to bring community vulnerability data into the foundation as a shared asset.
    Ensure the vulnerability data is updated in an efficient and timely manner. For example, ensuring there are well-documented processes for reporting vulnerabilities in community modules.
    Review and recommend processes for handling of security reports (but not the actual administration of security reports, which are reviewed by a group of people directly delegated to by the TSC).
    Define and maintain policies and procedures for the coordination of security concerns within the external Node.js open source ecosystem.
    Offer help to npm package maintainers to fix high-impact security bugs.
    Maintain and make available data on disclosed security vulnerabilities in:
        the core Node.js project
        other projects maintained by the Node.js Foundation technical group
        the external Node.js open source ecosystem
    Promote the improvement of security practices within the Node.js ecosystem.
    Recommend security improvements for the core Node.js project.
    Facilitate and promote the expansion of a healthy security service and product provider ecosystem.

Streams

The Streams Working Group is dedicated to the support and improvement of the Streams API as used in Node.js and the npm ecosystem. We seek to create a composable API that solves the problem of representing multiple occurrences of an event over time in a humane, low-overhead fashion. Improvements to the API will be driven by the needs of the ecosystem; interoperability and backwards compatibility with other solutions and prior versions are paramount in importance.

Responsibilities include:

    Addressing stream issues on the Node.js issue tracker.
    Authoring and editing stream documentation within the Node.js project.
    Reviewing changes to stream subclasses within the Node.js project.
    Redirecting changes to streams from the Node.js project to this project.
    Assisting in the implementation of stream providers within Node.js.
    Recommending versions of readable-stream to be included in Node.js.
    Messaging about the future of streams to give the community advance notice of changes.
