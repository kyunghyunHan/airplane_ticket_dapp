module airplane_dapp{

    use std::singer;
    use std::string::{Self,String};
    use aptos_std::table_with_length::{Self,TableWithLength};
    use std::vector;
    use aptos_framework::coin;
    //statue
    const ENO_VENUE: u64 = 0;
    const ENO_TICKETS: u64 = 1;
    const ENO_ENVELOPE: u64 = 2;
    const EINVALID_TICKET_COUNT: u64 = 3;
    const EINVALID_TICKET: u64 = 4;
    const EINVALID_PRICE: u64 = 5;
    const EMAX_SEATS: u64 = 6;
    const EINVALID_BALANCE: u64 = 7;


    struct AirplaneTicket has key,store,copy,drop{

    }

    struct AirplanceSeat has store,copy,drop{

    }

    struct AirplaneTicketWallet has key{

    }

    public fun to_string(value:u64):String{
        if(value==0){
            return string::utf8(b"0")
        };
        let buffer= vector::empty<u8>();
        while (value!=0){
            vector::push_back(&mut buffer,((48+value %10) as u8));
            value= value/10;
        };
        vector::reverse(&mut buffer);
        string::utf8(buffer)
    }
}