import useSwr from 'swr';
import {FullConfiguration} from 'swr/_internal';

import { RouteProps } from '../../@types/api';
import apiRoutes from './api-routes';



const useRequest = <T>(route: RouteProps, id?:string, props?: FullConfiguration) => {
  const isID = route==="CATEGORY" || route==="SINGLE_PRODUCT"
  const url = ()=> {return isID?apiRoutes[route](id!): apiRoutes[route];}
  const fetcher: (url: string) => Promise<T> = (url: string) => fetch(url).then(res => res.json());
  const {data, error, isLoading, ...args} = useSwr(url, fetcher, props ?? {});
  return {data, error, isLoading, ...args} 
};

export default useRequest;
