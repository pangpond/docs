/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: "โรงเรียนเทพศิรินทร์สมุทรปราการ",
    image: "/img/school/โรงเรียนเทพศิรินทร์สมุทรปราการ.jpg",
    infoLink: "https://www.facebook.com",
    pinned: true
  },
  {
    caption: "โรงเรียนเทพศิรินทร์สมุทรปราการ",
    image: "/img/school/โรงเรียนเทพศิรินทร์สมุทรปราการ.jpg",
    infoLink: "https://www.facebook.com",
    pinned: true
  },
  {
    caption: "โรงเรียนเทพศิรินทร์สมุทรปราการ",
    image: "/img/school/โรงเรียนเทพศิรินทร์สมุทรปราการ.jpg",
    infoLink: "https://www.facebook.com",
    pinned: true
  },
  {
    caption: "โรงเรียนเทพศิรินทร์สมุทรปราการ",
    image: "/img/school/โรงเรียนเทพศิรินทร์สมุทรปราการ.jpg",
    infoLink: "https://www.facebook.com",
    pinned: true
  }
];

const siteConfig = {
  title: "NextSchool" /* title for your website */,
  tagline: "คู่มือระบบบริหารสถานศึกษาครบวงจร",
  url: "http://docs.nextschool.io/" /* your website url */,
  baseUrl: "/" /* base url for your project */,
  projectName: "nextschool",
  headerLinks: [
    { doc: "manual", label: "คู่มือ" },
    { doc: "system-overview", label: "คุณสมบัติ" },
    { doc: "faq", label: "คำถามที่ถามบ่อย" },
    { blog: true, label: "บล็อก" },
    { search: true }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: "img/nextschool_invert.svg",
  footerIcon: "img/nextschool.svg",
  favicon: "img/favicon.png",
  /* colors for website */
  colors: {
    primaryColor: "#db5424",
    secondaryColor: "#fb642d"
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + " Nextgensoft",
  organizationName: "nextensions", // or set an env variable ORGANIZATION_NAME
  projectName: "docs", // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: "https://github.com/nextensions/NSDoc",
  algolia: {
    apiKey: "4fdd1e6cb553f663788dc3f2a3efd519",
    indexName: "nextschool"
  },
  onPageNav: 'separate'
};

module.exports = siteConfig;
