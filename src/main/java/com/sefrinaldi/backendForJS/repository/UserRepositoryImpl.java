package com.sefrinaldi.backendForJS.repository;

import com.sefrinaldi.backendForJS.model.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.springframework.stereotype.Repository;

import java.io.Reader;
import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository{

    User newUser = new User();
    public static Reader reader;
    public static SqlSessionFactory sqlSessionFactory;
    public static SqlSession sqlSession;

    @Override
    public void saveUser(User user) {
        try {
            connectMybatis();

            String fullname = user.getFullname();
            String username = user.getUsername();
            String password = user.getPassword();
            String address = user.getAddress();

            User newUser = new User(fullname, username, password, address);

            sqlSession.insert("User.insert", newUser);
            System.out.println("input berhasil");
            sqlSession.commit();
            sqlSession.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<User> findAllUser() {

        List<User> listUser = null;

        try {
            connectMybatis();

            listUser = sqlSession.selectList("User.getAll");

            sqlSession.commit();
            sqlSession.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return listUser;
    }

    @Override
    public void deleteUserById(int id) {
        try {
            connectMybatis();

            sqlSession.delete("User.deleteById", id);
            sqlSession.commit();
            sqlSession.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public User findById(int id) {

        User dataUser = null;
        try {

            connectMybatis();

            dataUser = sqlSession.selectOne("User.getById", id);

        } catch (Exception e) {
            e.printStackTrace();
        }

        return dataUser;
    }

    @Override
    public void updateUser(User user) {

        try {
            connectMybatis();

            newUser.setId(user.getId());
            newUser.setFullname(user.getFullname());
            newUser.setUsername(user.getUsername());
            newUser.setPassword(user.getPassword());
            newUser.setAddress(user.getAddress());

            sqlSession.update("User.update", newUser);
            sqlSession.commit();
            sqlSession.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public User findUsername(User user) {

        User newUser = null;
        try {
            connectMybatis();

            newUser = sqlSession.selectOne("User.getByUsername", user);
            System.out.println(user.getUsername());

        } catch (Exception e) {
            e.printStackTrace();
        }

//        if (!user.getUsername().equals(username)){
//            return true;
//        }

        return newUser;
    }

    public void connectMybatis() {
        try {
            reader = Resources.getResourceAsReader("SqlMapConfig.xml");
            sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
            sqlSession = sqlSessionFactory.openSession();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
