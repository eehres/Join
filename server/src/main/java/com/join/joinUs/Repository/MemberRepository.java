package com.join.joinUs.Repository;

import com.join.joinUs.Entity.Member;

import java.util.Optional;

public interface MemberRepository {
    Optional<Member> findByEmailAndProvider(String email, String provider);
}
