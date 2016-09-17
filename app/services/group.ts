import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import {Group} from '../models/group';
import {Contact} from '../models/contact';
import * as constants from '../config/constants';
import {BaseHttpService} from './base-http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {ContactService} from './contact';

class ServerResponse {
	constructor(public resource: any) {
	}
};

@Injectable()
export class GroupService {
	baseResourceUrl: string = constants.DSP_INSTANCE_URL + '/api/v2/db/_table/contact_group';
	contactGroupUrl: string = constants.DSP_INSTANCE_URL + '/api/v2/db/_table/contact_group_relationship';
	constructor(private httpService: BaseHttpService, private contactService: ContactService) {

	};


	query(params?: URLSearchParams): Observable<Group[]> {
		return this.httpService.http
			.get(this.baseResourceUrl, { search: params })
			.map((response) => {
				var result: ServerResponse = response.json();
				let groups: Array<Group> = [];
				result.resource.forEach((group) => {
					groups.push(Group.fromJson(group));
				});
				return groups;
			});
	};

	get(id: string): Observable<Group> {
		return this.httpService.http
			.get(this.baseResourceUrl + '/' + id)
			.map((response) => {
				var result: ServerResponse = response.json();
				let group: Group = Group.fromJson(result);
				return group;
			});
	};

	remove(id: string) {
		return this.httpService.http
			.delete(this.baseResourceUrl + '/' + id)
			.map((response) => {
				var result: any = response.json();
				return result.id;
			});
	}

	save (group: Group): Observable<any> {
		if (group.id) {
			return this.httpService.http.patch(this.baseResourceUrl, group.toJson(true))
				.map((response) => {
					return response;
				});
		} else {
			delete group.id;
			return this.httpService.http.post(this.baseResourceUrl, group.toJson(true))
				.map((response) => {
					return response;
				});
		}
	}
}
