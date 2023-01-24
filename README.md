# What is this?
A repository with three projects that have a single signpost component in it. The purpose is to build and test the signpost component for that framework and compare and contrast the similarities and differences of the libraries. Use this README as a starting point to explore the results and conclusions.

## Findings

- Build size (output)
- API (DX ergonomics, syntactic sugar)
  - 
- Framework idiosyncrocies or patterns
- Performance
  - Lighthouse CLI scores
    - 1, 10, 100, 1,000, 10,000, 100000, 1,000,000
  - Tree-shaking of build output with bundle-size for tracking build output over time
  - html
  - css
  - js
  - Using defulat CLI build configurations

## Preact

Started with: https://github.com/preactjs-templates/widget
- npx preact-cli create widget preact-compare

## Angular

Started with: 
1. ng new ng-workspace --no-create-application
2. cd angular-workspace
3. ng generate library ng-compare
4. ng build my-lib --configuration development
5. ng test my-lib
6. ng lint my-lib
7. new component: ng g c component/signpost --project=ng-compare --dry-run


## Vue

Started with: `vue create vue-compare`
- manual feature selection
- TypeScript
- Lint / Format
- Unit Testing