<template>
  <div class="container">
    <div class="main-wap">
      <h2>登陆系统</h2>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button :isLoading="isLoading" type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isLoading = true
          this.$store.commit('updateUserInfo', this.ruleForm)
          this.$router.push('/default')
        } else {
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #545c64;
}
.main-wap {
  background-color: #fff;
  padding: 30px 60px 30px 30px;
  width: 400px;
  position: relative;
  margin-top: 30px;
  left: 50%;
  margin-left: -240px;
  border-radius: 4px;
  border: 1px solid #fff;
}
.main-wap h2{
  font-size: 16px;
  margin-bottom: 24px;
  text-align: center;
}
</style>
