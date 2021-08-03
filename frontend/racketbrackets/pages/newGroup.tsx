import Head from 'next/head'
import { Community } from '../Classes/Community';
import firebase from 'firebase';
import { useRef } from 'react';
import { User } from '../Classes/User';
import router from 'next/router';

const newGroup = () => {

    const groupNameRef = useRef<HTMLInputElement>(null);

    const createGroup = () => {
        const db = firebase.database();
        const c = new Community(groupNameRef.current!.value,db);
        var s: string = " ";
        const name = localStorage.getItem("username");
        if(name) {
            s = name;
        }
        const u = new User(s,db);
        c.createCommunity(u,db);
        router.push(`/GroupProfile/?name=${c.getCommunityName()}`)
    }

    return (
        <div>
            <Head>
                <title>Create Group</title>
            </Head>
            <form method="post">
                <input type="text" name="Group Name" ref={groupNameRef}/>
                <input type="text" name="GroupLocation"/>
                <button type="button" onClick={createGroup}>Create Group</button>
            </form>
        </div>
    );
}

export default newGroup;