<template>
  <navbar btnBackground="bg-gradient-success" />
  <div
    class="page-header align-items-start min-vh-100"
    style="
      background-image: url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80');
    "
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div
                class="bg-gradient-success shadow-success border-radius-lg py-3 pe-1"
              >
                <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                  PPM
                </h4>
              </div>
            </div>
            <div class="card-body">
              <form role="form" class="text-start mt-3">
                <div class="mb-3">
                  <material-input
                    v-model="employeeId"
                    id="employeeId"
                    type="text"
                    label="사원번호"
                    name="employeeId"
                  />
                </div>
                <div class="mb-3">
                  <material-input
                    v-model="password"
                    id="password"
                    type="password"
                    label="비밀번호"
                    name="password"
                  />
                </div>
                <div class="text-center">
                  <material-button
                    class="my-4 mb-2"
                    variant="gradient"
                    color="success"
                    fullWidth
                    @click.prevent="loginSubmit"
                    >로그인</material-button
                  >
                </div>
                <p class="mt-4 text-sm text-center">
                  회원가입은 인사팀에 문의하세요.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer position-absolute bottom-2 py-2 w-100">
      <div class="container">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-12 col-md-6 my-auto">
            <div class="copyright text-center text-sm text-white text-lg-start">
              © {{ new Date().getFullYear() }}, made with
              <i class="fa fa-heart" aria-hidden="true"> OmokNoonE</i> by
              <a
                href="https://www.creative-tim.com"
                class="font-weight-bold text-white"
                target="_blank"
                >Creative Tim</a
              >
              for a better web.
            </div>
          </div>
          <div class="col-12 col-md-6">
            <ul
              class="nav nav-footer justify-content-center justify-content-lg-end"
            >
              <li class="nav-item">
                <a
                  href="https://github.com/OmokNoonE"
                  class="nav-link text-white"
                  target="_blank"
                  >
                  <div class="github-icon"/>
                  Github
                </a>
              </li>
<!--              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/presentation"
                  class="nav-link text-white"
                  target="_blank"
                  >About Us</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/blog"
                  class="nav-link text-white"
                  target="_blank"
                  >Blog</a
                >
              </li>
              <li class="nav-item">
                <a
                  href="https://www.creative-tim.com/license"
                  class="nav-link pe-0 text-white"
                  target="_blank"
                  >License</a
                >
              </li>-->
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, onBeforeUnmount } from "vue";
import Navbar from "@/examples/PageLayout/Navbar.vue";
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import { login } from '@/services/auth';
import { useRouter } from 'vue-router';
import store from '@/store';
import {useToast} from "vue-toastification";

const router = useRouter();

const employeeId = ref('');
const password = ref('');

const loginSubmit = async () => {
  try {
    await login(employeeId.value, password.value);
    await router.push('/');
  } catch (error) {
    // 로그인 실패 시 처리
    // console.error("로그인 실패", error);
    const toast = useToast(); // 토스트 메시지를 사용할 수 있는 toast 객체를 생성합니다.
    toast.error("회원 정보가 일치하지 않습니다."); // projectId가 없는 경우 토스트 메시지를 표시합니다.

  }
}

onBeforeMount(() => {
  store.commit("toggleEveryDisplay", false);
  store.commit("toggleHideConfig", false);
});

onBeforeUnmount(() => {
  store.commit("toggleEveryDisplay", true);
  store.commit("toggleHideConfig", true);
});
</script>

<style>
.github-icon {
  width: 24px; /* 아이콘의 너비 설정 */
  height: 24px; /* 아이콘의 높이 설정 */
  background-image: url("~@/assets/img/small-logos/github.svg"); /* 아이콘 이미지 설정 */
  background-size: cover; /* 아이콘 이미지 크기 조절 */
  filter: invert(1); /* 아이콘 색상을 흰색으로 변경 */
}
</style>
