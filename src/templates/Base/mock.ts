import { BaseTemplateProps } from '.';
import { data } from '../../api/dados.json';

export default {
    settings: data.setting,
    children: "ola mundo",
} as BaseTemplateProps;
