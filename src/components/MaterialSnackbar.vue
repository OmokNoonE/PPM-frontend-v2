<template>
  <!-- 스낵바 컨테이너 -->
  <div class="snackbar-container" :class="getColor(color)">
    <!-- 이모지 아이콘 -->
    <div class="icon-wrapper">
      <i class="material-icons" :class="getIcon(icon.color)">{{ icon.component }}</i>
    </div>
    <!-- 제목과 날짜 -->
    <div class="title-wrapper">
      <span class="font-weight-bold title-text" :class="getTextColor(color)">{{ title }}</span>
      <small :class="getTextColor(color)">{{ date }}</small>
    </div>
    <!-- 내용 -->
    <div class="card-body p-3 pb-0 content-text" :class="getTextColor(color)">
      {{ description }}
    </div>
    <!-- 닫기 아이콘 -->
    <i
        class="fas fa-times text-md ms-3 cursor-pointer close-icon"
        :class="getTextColor(color)"
        @click.stop="closeHandler"
    />
  </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

// 스낵바에 필요한 props 정의
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  icon: {
    type: Object,
    required: true,
  },
  color: {
    type: String,
    default: "success",
  },
  closeHandler: {
    type: Function,
    default: null,
  },
});

// props를 개별 변수로 추출
const { title, date, description, icon, color, closeHandler } = toRefs(props);

// 배경색 클래스를 반환하는 함수
const getColor = (color) => {
  return color === "white" ? "bg-white" : `bg-gradient-${color}`;
};

// 아이콘 색상을 반환하는 함수
const getIcon = (iconColor) => {
  return iconColor ? `text-${iconColor}` : null;
};

// 텍스트 색상을 반환하는 함수
const getTextColor = (color) => {
  return color === "white" ? "text-dark" : "text-white";
};
</script>

<style scoped>
/* 스낵바 컨테이너 스타일 */
.snackbar-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  min-width: 500px;
  max-width: 90%;
  width: auto;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* 아이콘 스타일 */
.icon-wrapper {
  margin-bottom: 8px;
}

/* 제목과 날짜 스타일 */
.title-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* 제목 텍스트 스타일 */
.title-text {
  word-wrap: break-word;
  white-space: normal;
}

/* 내용 스타일 */
.card-body {
  padding-top: 10px;
}

.content-text {
  white-space: pre-wrap;
  overflow-wrap: break-word;
}

/* 닫기 아이콘 스타일 */
.close-icon {
  position: absolute;
  top: 8px;
  right: 8px;
}
</style>
