export class Request {
  getUrl: string = "https://epc.opendatacommunities.org/api/v1/display/search";
  accept: string = "Accept: text/csv";
  authorization: string = "Authorization: Basic YW5kcmVpLm1heGltMDJAZ21haWwuY29tOjFjZGRiYzQ5NjgxYzA2MzQ0NTE3ZDNkY2VmYmNkZGUxMGUyZTA0MDE=";
  search_by: string = '';
  keyword: string = '';
}
