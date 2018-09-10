/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { resolve } = require('path');
const acceptedSubmissions = require('./src/data/accepted-submissions');

exports.createPages = ({ boundActionCreators, graphql }) => {
  acceptedSubmissions.papers
    .forEach((paper) => {
      boundActionCreators.createPage({
        component: resolve(`./src/components/presentation.js`),
        context: { ...paper, type: 'paper' },
        path: `/presentations/${ paper.slug }`
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
