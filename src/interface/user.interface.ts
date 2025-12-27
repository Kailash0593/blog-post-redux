export interface UserI {
    id: number
    name: string
    username: string
    email: string
    address: UserAddressI
    phone: string
    website: string
    company: UserCompanyI
}

export interface UserAddressI {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: UserGeoI
}

export interface UserGeoI {
    lat: string
    lng: string
}

export interface UserCompanyI {
    name: string
    catchPhrase: string
    bs: string
}
