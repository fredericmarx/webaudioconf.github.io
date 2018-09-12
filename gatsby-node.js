/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { resolve } = require('path');
const acceptedSubmissions = require('./src/data/accepted-submissions');

exports.createPages = ({ boundActionCreators, graphql }) => {
  acceptedSubmissions.demos
    .forEach((demo) => {
      boundActionCreators.createPage({
          component: resolve(`./src/components/demo-or-poster.js`),
        context: { ...demo, type: 'demo' },
        path: `/demos-and-posters/${ demo.slug }`
      });
    });
  acceptedSubmissions.installations
    .forEach((installation) => {
      boundActionCreators.createPage({
        component: resolve(`./src/components/presentation.js`),
        context: { ...installation, type: 'installation' },
        path: `/installations/${ installation.slug }`
      });
    });
  acceptedSubmissions.papers
    .forEach((paper) => {
      boundActionCreators.createPage({
        component: resolve(`./src/components/presentation.js`),
        context: { ...paper, type: 'paper' },
        path: `/presentations/${ paper.slug }`
      });
    });
  acceptedSubmissions.performances
    .forEach((performance) => {
      boundActionCreators.createPage({
        component: resolve(`./src/components/performance.js`),
        context: { ...performance, type: 'performance' },
        path: `/performances/${ performance.slug }`
      });
    });
  acceptedSubmissions.posters
    .forEach((poster) => {
      boundActionCreators.createPage({
        component: resolve(`./src/components/demo-or-poster.js`),
        context: { ...poster, type: 'poster' },
        path: `/demos-and-posters/${ poster.slug }`
      });
    });
  acceptedSubmissions.talks
    .forEach((talk) => {
      boundActionCreators.createPage({
        component: resolve(`./src/components/presentation.js`),
        context: { ...talk, type: 'talk' },
        path: `/presentations/${ talk.slug }`
      });
    });
};
