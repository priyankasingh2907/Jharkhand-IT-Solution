<?php

namespace App\Http\Controllers;

use App\Models\Customer;
// use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;



class CustomerController extends Controller
{
   
       
    public function register(Request $request){
        $user = new Customer;
        $user->fname = $request->fname;
        $user->lname = $request->lname;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->password = Hash::make($request->password);
        $user->save();
      if($user){
        return response()->json([
            "status"=>true,
            "message"=>"You have registered successfully",
            "data"=>$user

        ],200);
      }
      return response()->json([
        "status"=>false,
        "message"=>"Registeration failed",
    

    ],200);
    }
    public function login(Request $request){

        $user = Customer::where('email',$request->email)->first();

        if($user && Hash::check($request->password ,$user->password)){
            return response()->json([
                "status"=>true,
                "message"=>"You are autherised customer",
                "data"=>$user
    
            ],200);
        }

        return response()->json([
            "status"=>false,
            "message"=>"You are not  autherised , Registed",
            "data"=>$user

        ],200);

    }
  

}
