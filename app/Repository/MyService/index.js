const branchRepo=require('./branch.repo.js')();
const branchMenuRepo=require('./branchMenu.repo.js')();
const storeRepo=require('./store.repo.js')();
const storeCategoryRepo=require('./storeCategory.repo.js')();
const storeMenuRepo=require('./storeMenu.repo.js')();
module.exports={
    branchRepo:branchRepo,
    branchMenuRepo:branchMenuRepo,
    storeRepo:storeRepo,
    storeCategoryRepo:storeCategoryRepo,
    storeMenuRepo:storeMenuRepo
}
