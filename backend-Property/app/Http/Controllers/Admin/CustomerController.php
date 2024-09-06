<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class CustomerController extends Controller
{
    public function index(Request $request)
    {
        $customers= Customer::latest();

        if(!empty($request->get('keyword'))){
            $customers = Customer::where('name', 'LIKE', '%'.$request->get('keyword').'%');

        }
        $customers= $customers->paginate(8);
        
        return view('admin.customers.list',['customers'=>$customers]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.customers.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $validator = Validator::make($request->all(), [
            'fname' => 'required|max:255',
            'lname' => 'required|max:255',
            'email' => 'required|email|unique:customers,email',
            'image' =>'required|image|max:2048',
            'address' =>'required',
            'phone' =>'required',
            ]);
        // dd($request);
        if ($validator->passes()) {

            $img = $request->image;
            $ext = $img->getClientOriginalExtension();
            $imageName = time() . '.' . $ext;
            $img->move(public_path() . '/uploads/customers', $imageName);


            $customers = new Customer();
            $customers->fname = $request->fname;
            $customers->lname = $request->lname;
            $customers->email = $request->email;
            $customers->image = $imageName;
            $customers->address = $request->address;
            $customers->phone = $request->phone;
            $customers->save();

            Session()->flash('success','customers added successfully..');
            return response()->json([
                'status' => true,
                'message' => 'Data saved successfully',
                'data' => $request->all(),

            ]);
        } else {
            // Return with error message
            return response()->json([
                'status' => false,
                'message' => $validator->errors(),

            ]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id,Request $request)
    {
      
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit( $id,Request $request)
    {
        $customers = Customer::find($id);
        return view('admin.customers.edit', ['customers'=>$customers]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        // dd($request);
        $customers = Customer::find($id);
        $validator = Validator::make($request->all(), [
            'fname' => 'required|max:255',
            'lname' => 'required|max:255',
            'image' =>'required|image|max:2048',
            'address' =>'required',
            'phone' =>'required',  
        ]);
        if ($validator->passes()) {
            $img = $request->image;
            $ext = $img->getClientOriginalExtension();
            $imageName = time() . '.' . $ext;
            $img->move(public_path() . '/uploads/customers', $imageName);

         
            $customers->fname = $request->fname;
            $customers->lname = $request->lname;
          
            $customers->image = $imageName;
            $customers->address = $request->address;
            $customers->phone = $request->phone;
            $customers->save();

            Session()->flash('success','customers updated successfully..');
            return response()->json([
                'status' => true,
                'message' => 'Data updated successfully',
                'data' => $request->all(),

            ]);
        } else {
            // Return with error message
            return response()->json([
                'status' => false,
                'message' => $validator->errors(),

            ]);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destory( $id)
    {
        $customers = Customer::find($id);
        $customers->delete();
      return back()->with('success','customers deleted successfully..');
    }
}
