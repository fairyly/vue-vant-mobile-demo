/**
 * 请求统一管理
 */
import {  postJson } from './request';

/* Common */
export const getAccessToken = data => postJson('/web/test', data);

