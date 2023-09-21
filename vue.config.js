module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/variables.scss"; // 导入变量文件
          `,
      },
    }
  }
};